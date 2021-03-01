package com.joseph.social_lite.services;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.joseph.social_lite.model.Member;
import com.joseph.social_lite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AuthService {
    @Autowired
    private MemberRepository memberRepository;

    public List<Member> getUsers(){
        return this.memberRepository.findAll();
    }

    public Date currentDate(){
        Date date = new Date();
        return date;
    }

    public String dateFormater(Date date){
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        return formatter.format(date);
    }

    public void signUp(Member member){
        member.setMemberJoinDate(currentDate());
        this.memberRepository.save(member);
    }

    public Boolean login(String username, String password){
        List<Member> members = getUsers();
        for (Member member: members) {
            if(member.getUsername().equals(username) && member.getPassword().equals(password)){
                return true;
            }
        }
        return false;
    }
}
