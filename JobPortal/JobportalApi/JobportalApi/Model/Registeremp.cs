using System.ComponentModel.DataAnnotations;

namespace JobportalApi.Model
{
    public class Registeremp
    {
        [Key]
        public int id { get; set; }
        public string employeename { get; set; }
        public string Address { get; set; }

        public string email { get; set; }
        public string experiance { get; set; }
        public string currentjob { get; set; }

        public string highestdegree { get; set; }
        public string expesal { get; set; }
    }
}
