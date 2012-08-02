package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Annotation.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Annotation extends Figure {
    /**
     * The message.
     */
    private String msg;

    public Annotation(final JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}
    
    /**
     * Constructor.
     * @param aMsg The message
     */
    public Annotation(final String aMsg) {
    	this.msg = aMsg;       
    }

    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        var msg = this.@org.gwtdraw2d.client.Annotation::msg;
        return new $wnd.draw2d.Annotation(msg);
    }-*/;
    
    public final native String getText() /*-{
		var jsThis = this.@org.gwtdraw2d.client.Annotation::getJsObj()();
		return jsThis.getText();
	}-*/;
    
    public native void setFontSize(final int size) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Annotation::getJsObj()();	
		jsThis.setFontSize(size);
	}-*/;
    

    public native void setStyledText(final String textStyle) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Annotation::getJsObj()();	
		jsThis.setStyledText(textStyle);
	}-*/;
    
	public final native void setText(final String text) /*-{
		var jsThis = this.@org.gwtdraw2d.client.Annotation::getJsObj()();
		jsThis.setText(text);
	}-*/;
	
}
