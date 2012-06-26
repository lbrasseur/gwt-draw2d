package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.DoubleClickHandler;
import com.google.gwt.event.dom.client.HasClickHandlers;
import com.google.gwt.event.dom.client.HasDoubleClickHandlers;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventListener;

public class RoundCornerFigure extends Node{
	public RoundCornerFigure(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	public RoundCornerFigure() {
		super();
	}

	/**
	 * {@inheritDoc}
	 */
	protected native JavaScriptObject create() /*-{
		var rounded = new $wnd.draw2d.RoundCornerFigure();
		return rounded;
	}-*/;

	public final native void setTitle(final String title) /*-{
		var jsThis = this.@org.gwtdraw2d.client.RoundCornerFigure::getJsObj()();
		jsThis.setTitle(title);
	}-*/;

	public final native String getTitle() /*-{
		var jsThis = this.@org.gwtdraw2d.client.RoundCornerFigure::getJsObj()();
		return jsThis.getTitle();
	}-*/;
	
	public  final native void setContent(final String content) /*-{
		var jsThis = this.@org.gwtdraw2d.client.RoundCornerFigure::getJsObj()();
		jsThis.setContent(content);
	}-*/;

}