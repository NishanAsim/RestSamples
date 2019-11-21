using System.ComponentModel.DataAnnotations;

namespace my_app_notifi.Models
{
    public class Role
    {  
        [Key]
        public int rId{get;set;}
        public string rName{get;set;}
    }
}