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
    this.ipData = "Loading or AdBlock is most likely stopping the IP from showing up";

    this.dataService.getIpAddress().subscribe((data: any) => {
      if (data instanceof String) {
        this.ipData = data;
      } else {
        this.ipData = data.ip;
      }
    });
  }

}
