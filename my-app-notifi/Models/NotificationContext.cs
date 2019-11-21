using Microsoft.EntityFrameworkCore;

namespace my_app_notifi.Models
{
    public class NotificationContext: DbContext
    {   
        public NotificationContext(DbContextOptions<NotificationContext> options)
            : base(options)
        {
        }

        public DbSet<Notification> Notifications { get; set; }
        
    }
}