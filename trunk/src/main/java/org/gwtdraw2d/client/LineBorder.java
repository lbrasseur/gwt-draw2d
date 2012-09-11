package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.LineBorder.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class LineBorder extends Border {
	private int lineWidth;
	public LineBorder(final int passedWidth) {
		lineWidth = passedWidth;	
    }
	
    public LineBorder(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        var jsLineWidth = this.@org.gwtdraw2d.client.LineBorder::lineWidth;
        return new $wnd.draw2d.LineBorder(jsLineWidth);
    }-*/;
}
