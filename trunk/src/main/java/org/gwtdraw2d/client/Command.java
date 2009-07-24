package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.Command.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class Command extends Component {
    /**
     * Default constructor.
     */
    public Command() {
        super();
    }

    /**
     * Constructor passing JavaScriptObject.
     * @param aJsObj the JavaScriptObject
     */
    public Command(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }

    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.Command();
    }-*/;
}
