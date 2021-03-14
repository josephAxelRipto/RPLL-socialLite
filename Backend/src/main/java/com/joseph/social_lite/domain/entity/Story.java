package com.joseph.social_lite.domain.entity;

import java.util.Date;

public class Story {
    private Date datePost;
    private int id;
    private String image;
    public Member m_Member;

    public boolean removeStory(int id, Date datePost) {
        return false;
    }
}
