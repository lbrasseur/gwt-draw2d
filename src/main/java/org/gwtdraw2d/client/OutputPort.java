package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.OutputPort.
 * @author lautaro.brasseur
 */
public class OutputPort extends Port {
    public OutputPort(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.OutputPort();
    }-*/;
}
