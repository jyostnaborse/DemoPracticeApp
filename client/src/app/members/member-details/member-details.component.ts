import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_CONFIGURATION } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit{
  member : Member| undefined
 
  constructor(private memberService: MemberService, private route: ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
    this.getMember();
  }

  getMember(){
    const username = this.route.snapshot.paramMap.get("username")
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => this.member= member
    })
  }

}
