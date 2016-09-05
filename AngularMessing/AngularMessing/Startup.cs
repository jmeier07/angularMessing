using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularMessing.Startup))]
namespace AngularMessing
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
