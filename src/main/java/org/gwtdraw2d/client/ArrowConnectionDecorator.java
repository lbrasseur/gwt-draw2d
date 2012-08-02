package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ArrowConnectionDecorator.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class ArrowConnectionDecorator extends ConnectionDecorator {
    public ArrowConnectionDecorator(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.ArrowConnectionDecorator();
    }-*/;
}
