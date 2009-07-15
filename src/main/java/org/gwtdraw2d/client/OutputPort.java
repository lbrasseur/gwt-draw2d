package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.OutputPort.
 * @author lautaro.brasseur
 */
public class OutputPort extends Port {
    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.OutputPort();
    }-*/;
}
