package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Draggable.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Draggable extends EventTarget {
	
	public Draggable() {
		this.create();
	}
	
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Draggable();
    }-*/;
	public final native void onDrop(final int x, final int y) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Draggable::getJsObj()();
	
		jsThis.onDrop(x, y);
	}-*/;
	public final native void detachEventHandlers() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Draggable::getJsObj()();
	
		jsThis.detachEventHandlers();
	}-*/;
	
    public final native Figure getDropTarget() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Draggable::getJsObj()();
	    var figure = @org.gwtdraw2d.client.Figure::new(Lcom/google/gwt/core/client/JavaScriptObject;)(jsThis.getDropTarget());
	    return figure;
	}-*/;

}
