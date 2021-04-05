package com.joseph.social_lite.data.repository;

import com.joseph.social_lite.domain.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowRepository extends JpaRepository<Follow, Long> {
}
