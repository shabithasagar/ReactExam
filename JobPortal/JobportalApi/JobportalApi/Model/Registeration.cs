using System.ComponentModel.DataAnnotations;

namespace JobportalApi.Model
{
    public class Registeration
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string category { get; set; }

        public string phoneno { get; set; }
        public string website { get; set; }
    }
}
