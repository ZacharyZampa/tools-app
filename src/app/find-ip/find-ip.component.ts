import { Component, OnInit } from '@angular/core';
import { IpDataService } from './ip-data.service';

@Component({
  selector: 'app-find-ip',
  templateUrl: './find-ip.component.html',
  styleUrls: ['./find-ip.component.css']
})
export class FindIpComponent implements OnInit {

  ipData: String;

  constructor(private dataService: IpDataService) { }

  ngOnInit(): void {
    this.callGetIpAddress();
  }

  callGetIpAddress() {
    this.dataService.getIpAddress().subscribe((data: any) => {
      if (data instanceof String) {
        this.ipData = data;
      } else if (!data) {
        this.ipData = "AdBlock is most likely stopping the IP from showing up"
      } else {
        this.ipData = data.ip;
      }
    });
  }

}
