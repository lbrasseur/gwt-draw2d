package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ToolPalette.
 * @author lautaro.brasseur
 */
public class ToolPalette extends Window {
    public ToolPalette(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.ToolPalette();
    }-*/;
    

    public ToolPalette(){
    	this.create();
    }
    
    
}
