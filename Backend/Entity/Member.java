package org.socialLite.domain.entity;


/**
 * @author msj
 * @version 1.0
 * @created 28-Feb-2021 13.37.31
 */
public class Member {

    private date birth;
    private String fullname;
    private date memberJoinDate;
    private String password;
    private String username;
    public Bookmark m_Bookmark;

    public Member() {

    }

    public void finalize() throws Throwable {

    }

    /**
     * @param username
     */
    public int countFollowers(String username) {
        return 0;
    }

    /**
     * @param username
     */
    public int countFollowing(string username) {
        return 0;
    }

    /**
     * @param username
     * @param data
     */
    public boolean editProfile(String username, Member data) {
        return false;
    }

    /**
     * @param username
     * @param password
     */
    public boolean logIn(String username, String password) {
        return false;
    }

    public boolean logOut() {
        return false;
    }

}