package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Canvas.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Canvas extends Component {	
	public Canvas() {
		super();
	}    
	public Canvas(final JavaScriptObject aJsObj) {
	    super(aJsObj);
	}
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Canvas();
    }-*/;

    /**
     * @return The X coordinate in relation to the canvas
     */
    public final native int getAbsoluteX() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
        return jsThis.getAbsoluteX();
    }-*/;

    /**
     * @return The Y coordinate in relation to the canvas
     */
    public final native int getAbsoluteY() /*-{
        var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
        return jsThis.getAbsoluteY();
    }-*/;
    
    /**
     * Sets the view port for the canvas
     * @param divId
     */
    public final native void setViewPort(String divId) /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
	    jsThis.setViewPort(divId);
	}-*/;
    
    /**
     * Sets the height of the canvas
     * @param height
     */
    public final native void setHeight(int height) /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
	    jsThis.setHeight(height);
	}-*/;
    
    /**
     * gets the height of the canvas
     * @return
     */
    public final native int getHeight() /*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    return jsThis.getHeight();
	}-*/;
    
    /**
     * Sets the width of the canvas
     * @param width
     */
    public final native void setWidth(int width) /*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    jsThis.setWidth(width);
	}-*/;
    
    /**
     * gets the width of the canvas
     * @return
     */
    public final native int getWidth() /*-{
	    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
	    return jsThis.getWidth();	
	}-*/;
    
    /**
     * gets the scroll top position
     * @return
     */
    public final native int getScrollTop() /*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    return jsThis.getHeight();
	}-*/;
    
    /**
     * gets the left scroll position
     * @return
     */
    public final native int getScrollLeft() /*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    return jsThis.getScrollLeft();
	}-*/;
    
    /**
     * Gets the X coordinate
     * @return
     */
    public final native int getX() /*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    return jsThis.getX();
	}-*/;
    
    /**
     * Gets the Y coordinate
     * @return
     */
    public final native int getY() /*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    return jsThis.getY();
	}-*/;
    
    /**
     * Returns the flag if the Canvas has enabled the smooth figure handling during add, remove, selection, drag&drop.
     * @return
     */
    public final native boolean getEnableSmoothFigureHandling()/*-{
    var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();
    return jsThis.getEnableSmoothFigureHandling();
	}-*/;
    
    public final native void setEnableSmoothFigureHandling( final boolean flag) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Canvas::getJsObj()();    
		jsThis.setEnableSmoothFigureHandling(flag);
	}-*/;
    
    
    
    
}
