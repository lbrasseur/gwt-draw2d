package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Window.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Window extends Figure {
	public Window() {
		super();
	}
	
    public Window(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Window();
    }-*/;
}
