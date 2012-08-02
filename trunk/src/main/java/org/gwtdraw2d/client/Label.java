package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Label.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Label extends Figure {
    public Label(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}
	public Label() {
		this.create();
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Label();
    }-*/;
	
    public final native String getText() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();
		return jsThis.getText();
	}-*/;
	
	public final native void setText(final String text) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();
		jsThis.setText(text);
	}-*/;
	
    public native void setBackgroundColor(final Color color) /*-{
    	var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();
    	var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();
    	jsThis.setBackgroundColor(jsColor);
	}-*/;
    
    public native void setColor(final Color color) /*-{
    	var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();
    	var jsColor = color.@org.gwtdraw2d.client.Color::getJsObj()();
    	jsThis.setColor(jsColor);
	}-*/;  
    
    public native void setStyledText(final String textStyle) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();	
		jsThis.setStyledText(textStyle);
	}-*/;
    
    public native void setFontSize(final int fontSize) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();	
		jsThis.setFontSize(fontSize);
	}-*/;    
    
    public native void setAlign(final String align) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();	
		jsThis.setAlign(align);
	}-*/; 
    public final native void setWordwrap( final Boolean flag) /*-{
    	var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();    
		jsThis.setWordwrap(flag);
	}-*/;
    public final native Boolean isResizeable() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Label::getJsObj()();
		return jsThis.isResizeable();
	}-*/;
}
