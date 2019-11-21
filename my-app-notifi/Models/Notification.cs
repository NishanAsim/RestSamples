using System.ComponentModel.DataAnnotations;

namespace my_app_notifi.Models
{
    public class Notification
    {   
       [Key]
       public int nId{get;set;}
       [Required]
       [MinLength(7)]
       public string nName { get; set; }  
       [Required]
       public string nSummary { get; set; }  
       [Required]
       public NotificationType nType{get;set;}
       [Required]
       public string nReferences { get; set; }  
       public string nDetails { get; set; } 
       [Required]
       public string nCreatedOn { get; set; } 
       public string nExpiresOn { get; set; }
       public User nUser{get;set;} 
       public  Role uRole{get;set;}
    }
    
    
    
}