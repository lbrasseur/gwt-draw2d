package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.InputPort.
 * @author lautaro.brasseur
 */
public class InputPort extends Port {
    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.InputPort();
    }-*/;
}
