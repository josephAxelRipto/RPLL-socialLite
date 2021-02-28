package com.joseph.social_lite.model;

import java.util.Date;

public class Comment {
    private Date dateComment;
    private int id;
    private String memberComment;
    private String username;

    public boolean deleteComment(int id) {
        return false;
    }

    public boolean editComment(int id, String newComment) {
        return false;
    }
}
