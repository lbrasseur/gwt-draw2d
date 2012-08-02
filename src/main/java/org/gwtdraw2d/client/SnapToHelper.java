package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.SnapToHelper.
 * @author lautaro.brasseur
 */
public class SnapToHelper extends Component {    
	public SnapToHelper(JavaScriptObject aJsObj) {
		super(aJsObj);
	}
	
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.SnapToHelper();
    }-*/;
}
