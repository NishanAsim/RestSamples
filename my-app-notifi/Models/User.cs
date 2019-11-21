using System.ComponentModel.DataAnnotations;

namespace my_app_notifi.Models
{
    public class User
    {   
        [Key]
        public int uId{get;set;}
        public string uName{get;set;}
       
    }
}