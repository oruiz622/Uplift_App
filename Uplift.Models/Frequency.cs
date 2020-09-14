using System.ComponentModel.DataAnnotations;

namespace Uplift.Models
{
    public class Frequency
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Frequency")]
        public string Name { get; set; }

        [Required]
        public int FrequencyCount { get; set; }
    }
}
