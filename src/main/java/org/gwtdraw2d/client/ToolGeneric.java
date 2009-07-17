package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ToolGeneric.
 * @author lautaro.brasseur
 */
public class ToolGeneric extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.ToolGeneric();
    }-*/;
}
