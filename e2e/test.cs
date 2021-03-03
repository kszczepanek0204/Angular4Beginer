using System;
using Blog.Core.Helpers;
using Blog.Core.Helpers.Interface;
using Blog.DataLayer.Models;
using DataShared.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moq;
using NUnit.Framework;

namespace Blog.Tests.Core.Helpers
{
    [TestFixture]
    public class JwtHelperTest
    {
        private DbContextOptionsBuilder<BlogContext> optionsBuilder;
        private BlogContext db;
        private IJwtHelper jwt;
        private IConfiguration configuration;

        [SetUp]
        public void SetUp()
        {
            optionsBuilder = new DbContextOptionsBuilder<BlogContext>()
                .UseInMemoryDatabase(databaseName: "Blog Tests");
            db = new BlogContext(optionsBuilder.Options);

            MockIConfiguration();

            jwt = new JwtHelper(configuration);
        }

        [Test]
        public void AlwaysSuccess()
        {
            Assert.Pass();
        }

        [Test]
        public void JwtHelperExists()
        {
            Assert.IsInstanceOf<IJwtHelper>(jwt);
        }

        [Test]
        public void JwtGenerateToken()
        {
            var user = new MemberDto
            {
                Name = "Jhon",
                LastName = "Watson",
                Email = "me@john.co.uk",
                Username = "SuperJohn",
                LastLogin = DateTime.Now,
                RegistrationDate = DateTime.Now
            };
            var token = jwt.GenerateToken(user);
            Assert.IsNotEmpty(token);
        }

        private void MockIConfiguration()
        {
            var iConfig = new Mock<IConfiguration>();
            
            iConfig.Setup(x => x[It.Is<string>(s => s == "JwtSettings:TokenSecret")])
                .Returns(Guid.NewGuid().ToString());
            configuration = iConfig.Object;
        }
    }
}