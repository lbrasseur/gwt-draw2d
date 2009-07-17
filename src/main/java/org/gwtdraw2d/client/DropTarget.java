package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.DropTarget.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class DropTarget extends EventTarget {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.DropTarget();
    }-*/;
}
