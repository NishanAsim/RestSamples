export class NotifyMessage {
   nId: number;
   nName: string;
   nSummary: string;
   nType: number;
   nReferences: string;
   nDetails: string;
   nCreatedOn: string;
   nExpiresOn : string;
   nUser: {
     uId: number;
     uName : string
    };
   uRole: {
     rId: number;
     rName: string
    }
  }