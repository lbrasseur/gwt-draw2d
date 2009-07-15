package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Port.
 * @author lautaro.brasseur
 */
public class Port extends Component {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.Port();
    }-*/;

    /**
     * Sets the background color.
     * @param color The color to be set
     */
    public final void setBackgroundColor(final Color color) {
        invoke("setBackgroundColor", color.getJsObj());
    }
}
