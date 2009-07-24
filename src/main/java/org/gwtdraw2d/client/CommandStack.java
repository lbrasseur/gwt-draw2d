package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.CommandStack.
 * @author lautaro.brasseur
 * TODO: Start coding the wrapper!. 
 */
public class CommandStack extends Command {
    /**
     * Constructor passing JavaScriptObject.
     * @param aJsObj the JavaScriptObject
     */
    public CommandStack(final JavaScriptObject aJsObj) {
        super(aJsObj);
    }

    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create() /*-{
        return new $wnd.draw2d.CommandStack();
    }-*/;

    /**
     * Executes the specified Command if possible. Prior to executing the
     * command, a draw2d.CommandStackEvent for PRE_EXECUTE will be fired to
     * event listeners. Similarly, after attempting to execute the command, an
     * event for POST_EXECUTE will be fired.
     * @param command The command to execute.
     */
    public final native void execute(final Command command) /*-{
        var jsThis = this.@org.gwtdraw2d.client.CommandStack::getJsObj()();
        var jsCommand = command.@org.gwtdraw2d.client.Command::getJsObj()();

        jsThis.execute(jsCommand);
    }-*/;

}
