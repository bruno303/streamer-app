using System;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VideoController : ControllerBase
    {
        private readonly ILogger<VideoController> _logger;

        public VideoController(ILogger<VideoController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{moviename}")]
        public IActionResult Get(string moviename)
        {
            _logger.LogInformation("Nome do arquivo: {0}", moviename);
            string fullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Movies", moviename);
            
            _logger.LogInformation("Caminho completo: {0}", fullPath);

            if (System.IO.File.Exists(fullPath)) {
                _logger.LogInformation("Abrindo arquivo");
                FileStream fs = System.IO.File.Open(fullPath, FileMode.Open);

                _logger.LogInformation("Iniciando streaming");
                return this.File(fs, new MediaTypeHeaderValue("video/mp4").MediaType, true);
            }

            _logger.LogInformation("Bad Request");
            return BadRequest();
        }
    }
}
