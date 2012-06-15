package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.InputPort.
 * @author lautaro.brasseur
 */
public class InputPort extends Port {
    public InputPort(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.InputPort();
    }-*/;
}
