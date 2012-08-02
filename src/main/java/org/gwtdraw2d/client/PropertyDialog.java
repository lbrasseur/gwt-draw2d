package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.PropertyDialog.
 * @author lautaro.brasseur
 */
public class PropertyDialog extends Dialog {
    public PropertyDialog(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.PropertyDialog();
    }-*/;    
    
    public final native void onOk() /*-{
    var jsThis = this.@org.gwtdraw2d.client.PropertyDialog::getJsObj()();
    return jsThis.onOk();
}-*/;
}
