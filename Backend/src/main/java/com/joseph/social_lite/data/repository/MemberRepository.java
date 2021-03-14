package com.joseph.social_lite.data.repository;

import com.joseph.social_lite.domain.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findMemberByUsernameAndPassword(String username, String password);
    Optional<Member> findMemberByUsername(String username);
}
