package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.DragDropEvent.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class DragDropEvent extends Event {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.DragDropEvent();
    }-*/;
}
