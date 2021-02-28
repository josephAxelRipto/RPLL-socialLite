package com.joseph.social_lite;

import com.joseph.social_lite.controller.RegisterController;
import com.joseph.social_lite.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SocialLiteApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SocialLiteApplication.class, args);
    }
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public void run(String... args) throws Exception {
        RegisterController rc = new RegisterController();
        rc.signUpToDB(memberRepository);
    }
}
