package org.socialLite.domain.entity;


/**
 * @author msj
 * @version 1.0
 * @created 28-Feb-2021 13.38.22
 */
public class DirectMessage {

	private date dateMessage;
	private String from;
	private int id;
	private String message;
	private String to;
	public Member m_Member;

	public DirectMessage(){

	}

	public void finalize() throws Throwable {

	}

}