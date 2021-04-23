package com.joseph.social_lite.data.repository;

import com.joseph.social_lite.domain.entity.Bookmark;
import com.joseph.social_lite.domain.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface BookmarkRepository  extends JpaRepository<Bookmark, Long> {
    ArrayList<Bookmark> findAllByMember(Member member);
}
