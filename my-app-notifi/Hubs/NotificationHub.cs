using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using my_app_notifi.Models;

namespace my_app_notifi.Hubs
{
    public class NotificationHub:Hub
    {   
        public async Task NewMessage(Notification notifi)  
        {  
            await Clients.All.SendAsync("send", notifi);  
        }  
        
    }
}