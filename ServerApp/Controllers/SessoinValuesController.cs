using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using ServerApp.Models.BindingTargets;

namespace ServerApp.Controllers{
    [Route("/api/session")]
    [ApiController]
    public class SessionValuesController : Controller{
        [HttpGet("cart")]
        public IActionResult GetCart(){
            return Ok(HttpContext.Session.GetString("cart"));
        }
        [HttpPost("cart")]
        public void StoreCart([FromBody] ProductSelection[] products){
            var jsonData = JsonConvert.SerializeObject(products);
            HttpContext.Session.SetString("cart", jsonData);
        }
        [HttpGet("checkout")]
        public IActionResult GetCheckout(){
            return Ok(HttpContext.Session.GetString("checkout")); 
        }
        [HttpPost("checkout")]
        public void StoreCheckout([FromBody] CheckoutState data){
            HttpContext.Session.SetString("checkout", JsonConvert.SerializeObject(data));
        }
    }
}