package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Color.
 * @author lautaro.brasseur
 */
public class Color extends Component {
    /**
     * The red value.
     */
    private int red;

    /**
     * The green value.
     */
    private int green;

    /**
     * The blue value.
     */
    private int blue;

    /**
     * Constructor.
     * @param aRed The red value
     * @param aGreen The green value
     * @param aBlue The blue value
     */
    public Color(final int aRed, final int aGreen, final int aBlue) {
        super();
        this.red = aRed;
        this.green = aGreen;
        this.blue = aBlue;
    }

    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create() /*-{
        var red = this.@org.gwtdraw2d.client.Color::red;
        var green = this.@org.gwtdraw2d.client.Color::green;
        var blue = this.@org.gwtdraw2d.client.Color::blue;
        return new $wnd.draw2d.Color(red, green, blue);
    }-*/;
}
