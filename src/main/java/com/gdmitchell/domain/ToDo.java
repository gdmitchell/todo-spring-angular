package com.gdmitchell.domain;

import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 *
 * @author Graham
 *         Date: 7/23/13
 *         Time: 10:58 AM
 */
public class ToDo {
    private String description;
    private boolean done;
    private Date date;

    public ToDo() {
        setDone(false);
        setDate(new Date());
    }

    public ToDo(String description) {
        this();
        setDescription(description);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
