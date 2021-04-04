package com.joseph.social_lite.data.repository;

import com.joseph.social_lite.domain.entity.DirectMessage;
import com.joseph.social_lite.domain.entity.Member;
import com.joseph.social_lite.domain.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllByOwnerOrderByDatePost(Member owner);
}
