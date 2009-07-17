package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ResizeHandle.
 * @author lautaro.brasseur
 */
public class ResizeHandle extends Rectangle {
    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.ResizeHandle();
    }-*/;
}
