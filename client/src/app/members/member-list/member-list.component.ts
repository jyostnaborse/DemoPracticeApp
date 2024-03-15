import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[] = []


  constructor(private MemberService: MemberService) {

  }
  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.MemberService.getMembers().subscribe({
      next: repsonse => {
        this.members = repsonse
      }
    })
  }

}
