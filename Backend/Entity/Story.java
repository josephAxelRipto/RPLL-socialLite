package org.socialLite.domain.entity;


/**
 * @author msj
 * @version 1.0
 * @created 28-Feb-2021 13.38.12
 */
public class Story {

	private date datePost;
	private int id;
	private String image;
	public Member m_Member;

	public Story(){

	}

	public void finalize() throws Throwable {

	}

	/**
	 * 
	 * @param id
	 * @param datePost
	 */
	public boolean removeStory(int id, date datePost){
		return false;
	}

}