package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ImageFigure.
 * @author lautaro.brasseur
 */
public class ImageFigure extends Figure {
    /**
     * The URL for the image.
     */
    private String imageUrl;

    /**
     * Constructor.
     * @param anImageUrl The URL for the image
     */
    public ImageFigure(final String anImageUrl) {
        this.imageUrl = anImageUrl;
    }

    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create() /*-{
        var imageUrl = this.@org.gwtdraw2d.client.ImageFigure::imageUrl;
        return new $wnd.draw2d.ImageFigure(imageUrl);
    }-*/;
}
